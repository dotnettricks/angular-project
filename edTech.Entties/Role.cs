using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace edTech.Entities
{
    public class Role : IdentityRole<int>
    {
        public string Description { get; set; }
    }
}
