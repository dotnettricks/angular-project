using edTech.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Services.Interfaces
{
    public interface ICourseService
    {
        IEnumerable<Course> GetCourses();
        Course GetCourse(int id);
        void AddCourse(Course course);
        void UpdateCourse(Course course);
        void DeleteCourse(int id);
    }
}
