
using edTech.Entities;
using edTech.Repositories.Interfaces;
using edTech.Repositories.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace edTech.Repositories.Implementations
{
    public class CartRepository : Repository<Cart>, ICartRepository
    {
        private AppDbContext dbContext
        {
            get
            {
                return _dbContext as AppDbContext;
            }
        }

        public CartRepository(DbContext dbContext) : base(dbContext)
        {
        }

        public bool SaveCart(Cart cart)
        {
            dbContext.Carts.Add(cart);
            dbContext.SaveChanges();
            return true;
        }
    }
}
