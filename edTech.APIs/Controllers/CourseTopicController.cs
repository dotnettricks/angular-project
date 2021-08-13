using edTech.APIs.Filters;
using edTech.Entities;
using edTech.Services.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace edTech.APIs.Controllers
{
    [EnableCors("AllowAll")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    [CustomAuthorize]
    public class CourseLessonController : ControllerBase
    {
        IService<CourseLesson> _courseLesson;
        public CourseLessonController(IService<CourseLesson> courseLesson)
        {
            _courseLesson = courseLesson;
        }

        [HttpGet]
        public IEnumerable<CourseLesson> GetLessons()
        {
            return _courseLesson.GetAll();
        }

        [HttpPost]
        public IActionResult AddLesson(CourseLesson model)
        {
            try
            {
                _courseLesson.Add(model);
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
