
using edTech.Entities;
using edTech.Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Repositories.Interfaces
{
    public interface IOrderRepository : IRepository<Order>
    {
        OrderModel GetOrderDetails(string id);
        IEnumerable<Order> GetUserOrders(int UserId);
        PagingListModel<OrderModel> GetOrderList(int page, int pageSize);
    }
}
