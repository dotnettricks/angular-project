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
    public class TopicRepository : Repository<CourseTopic>, ITopicRepository
    {
        private AppDbContext dbContext
        {
            get
            {
                return _dbContext as AppDbContext;
            }
        }
        public TopicRepository(DbContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<CourseTopic> GetTopicsByCourse(int id)
        {
            var Topics = (from topic in dbContext.CourseTopics
                           where topic.CourseId == id
                           select topic).ToList();
            return Topics;
        }
    }
}
