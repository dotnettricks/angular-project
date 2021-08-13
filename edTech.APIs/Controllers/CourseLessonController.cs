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
    public class CourseTopicController : ControllerBase
    {
        IService<CourseTopic> _courseTopic;
        public CourseTopicController(IService<CourseTopic> courseTopic)
        {
            _courseTopic = courseTopic;
        }

        [HttpGet]
        public IEnumerable<CourseTopic> GetTopics()
        {
            return _courseTopic.GetAll();
        }

        [HttpPost]
        public IActionResult AddTopic(CourseTopic model)
        {
            try
            {
                _courseTopic.Add(model);
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
