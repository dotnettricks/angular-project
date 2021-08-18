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
        ILessonService _lessonService;
        public CourseLessonController(ILessonService lessonService)
        {
            _lessonService = lessonService;
        }

        [HttpGet]
        public IEnumerable<CourseLesson> GetAll()
        {
            return _lessonService.GetAll();
        }

        [HttpGet("{id}")]
        public IEnumerable<CourseLesson> GetLessonsByTopic(int id)
        {
            return _lessonService.GetLessonsByTopic(id);
        }

        [HttpPost]
        public IActionResult Add(CourseLesson model)
        {
            try
            {
                _lessonService.Add(model);
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
