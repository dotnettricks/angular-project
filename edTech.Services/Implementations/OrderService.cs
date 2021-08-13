using edTech.Entities;
using edTech.Repositories.Interfaces;
using edTech.Repositories.Models;
using edTech.Services.Interfaces;
using edTech.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Services.Implementations
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepo;
        public OrderService(IOrderRepository orderRepo)
        {
            _orderRepo = orderRepo;
        }

        public OrderModel GetOrderDetails(string OrderId)
        {
            var model = _orderRepo.GetOrderDetails(OrderId);
            if (model != null && model.Items.Count > 0)
            {
                decimal subTotal = 0;
                foreach (var item in model.Items)
                {
                    item.Total = item.UnitPrice * item.Quantity;
                    subTotal += item.Total;
                }
                model.Total = subTotal;
                //5% tax
                model.Tax = Math.Round((model.Total * 5) / 100, 2);
                model.GrandTotal = model.Tax + model.Total;
            }
            return model;
        }

        public IEnumerable<Order> GetUserOrders(int UserId)
        {
            return _orderRepo.GetUserOrders(UserId);
        }

        public int PlaceOrder(PaymentModel model)
        {
            Order order = new Order
            {
                PaymentId = model.PaymentId,
                UserId = model.UserId,

                CreatedDate = DateTime.Now,
                Id = model.OrderId
            };

            foreach (var item in model.Items)
            {
                OrderItem orderItem = new OrderItem { ItemId = item.ItemId, UnitPrice = item.UnitPrice, Quantity = item.Quantity, Total = item.Total };
                order.OrderItems.Add(orderItem);
            }

            _orderRepo.Add(order);
            return _orderRepo.SaveChanges();
        }
    }
}
