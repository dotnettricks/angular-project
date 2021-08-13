using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Entities
{
   public class Mentor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailID { get; set; }
        public string Title { get; set; }
        public string Biography { get; set; }       
        public string Skills { get; set; }
        public string ImageUrl { get; set; }
        public bool IsActive { get; set; }
        public int GenderId { get; set; }
        public string URL { get; set; }
    }
}
