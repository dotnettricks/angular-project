
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace edTech.Entities
{
    public class Order
    {
        public Order()
        {
            OrderItems = new HashSet<OrderItem>();
        }
        public string Id { get; set; }
        public int UserId { get; set; }
        public string PaymentId { get; set; }
        public string BillingAddress { get; set; }
        public DateTime CreatedDate { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
        public string PhoneNumber { get; set; }
    }
}
