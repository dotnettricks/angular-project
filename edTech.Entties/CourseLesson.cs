using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edTech.Entities
{
    public class CourseLesson
    {
        public int Id { get; set; }
        public string LessonName { get; set; }
        public string Description { get; set; }
        public string PdfPath { get; set; }
        public string CodePath { get; set; }
        public bool IsLock { get; set; }
        public string Duration { get; set; }
        public decimal Sequence { get; set; }
        public bool IsActive { get; set; }

        public int CourseTopicId { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public virtual CourseTopic CourseTopic { get; set; }
    }
}
