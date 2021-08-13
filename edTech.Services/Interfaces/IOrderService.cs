using edTech.Entities;
using edTech.Repositories.Models;
using edTech.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Services.Interfaces
{
    public interface IOrderService
    {
        OrderModel GetOrderDetails(string OrderId);
        IEnumerable<Order> GetUserOrders(int UserId);
        int PlaceOrder(PaymentModel model);
    }
}
