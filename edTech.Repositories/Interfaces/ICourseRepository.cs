﻿using edTech.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Repositories.Interfaces
{
    public interface ICourseRepository : IRepository<Course>
    {
        Course GetCourseByUrl(string Url);
    }
}
