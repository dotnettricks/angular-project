using edTech.Entities;
using edTech.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Repositories.Implementations
{
    public class SubscriptionRepository : Repository<Subscription>, ISubscriptionRepository
    {
        private AppDbContext dbContext
        {
            get
            {
                return _dbContext as AppDbContext;
            }
        }
        public SubscriptionRepository(DbContext dbContext) : base(dbContext)
        {

        }

        public Subscription GetUserSubscription(int UserId, int CourseId)
        {
            return dbContext.Subscriptions.Where(c => c.UserId == UserId && c.CourseId==CourseId).FirstOrDefault();
        }
    }
}
