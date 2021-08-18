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
    public class LessonRepository: Repository<CourseLesson>, ILessonRepository
    {
        private AppDbContext dbContext
        {
            get
            {
                return _dbContext as AppDbContext;
            }
        }
        public LessonRepository(DbContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<CourseLesson> GetLessonsByTopic(int id)
        {
            var Lessons = (from topic in dbContext.CourseTopics
                            join lessons in dbContext.CourseLessons
                            on topic.Id equals lessons.CourseTopicId
                            where topic.Id == id 
                            select lessons).ToList();
            return Lessons;
        }
    }
}
