using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace edTech.Entities
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }      
        public string Summary { get; set; }
        public string Description { get; set; }
        public decimal Sequence { get; set; }
        public int MentorId { get; set; }
        public string ImageUrl { get; set; }
        public string Url { get; set; }
        public decimal UnitPrice { get; set; }
        public int CategoryId { get; set; }
        public int DifficultyType { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsActive { get; set; }
        public virtual Category Category { get; set; }
    }
}
