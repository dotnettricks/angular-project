﻿using edTech.Entities;
using edTech.Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Services.Interfaces
{
    public interface ICartService
    {
        bool SaveCart(Cart cart);
    }
}
