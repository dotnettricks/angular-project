using edTech.Entities;
using edTech.Repositories.Interfaces;
using edTech.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Services.Implementations
{
    public class CourseService : Service<Course>, ICourseService
    {
        private readonly ICourseRepository _courseRepo;
        private readonly ITopicRepository _topicRepository;
        public CourseService(ICourseRepository courseRepo, ITopicRepository topicRepo) : base(courseRepo)
        {
            _courseRepo = courseRepo;
            _topicRepository = topicRepo;
        }

        public Course GetCourseWithLessons(string Url)
        {
            Course course = _courseRepo.GetCourseByUrl(Url);
            course.CourseTopics = _topicRepository.GetTopicWithLessons(course.Id).ToList();

            return course;
        }
    }
}
