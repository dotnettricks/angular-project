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
    public class CourseController : ControllerBase
    {
        IService<Course> _courseService;
        ISubscriptionService _subscriptionService;
        public CourseController(IService<Course> courseService, ISubscriptionService subscriptionService)
        {
            _courseService = courseService;
            _subscriptionService = subscriptionService;
        }

        [HttpGet]
        public IEnumerable<Course> GetAll()
        {
            return _courseService.GetAll();
        }

        [HttpPost]
        public IActionResult Add(Course model)
        {
            try
            {
                _courseService.Add(model);
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("{UserId}/{CourseId}")]
        public Subscription GetCourseSubscription(int UserId, int CourseId)
        {
            return _subscriptionService.GetUserSubscription(UserId, CourseId);
        }
    }
}
