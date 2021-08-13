using System;
using System.Collections.Generic;

namespace edTech.Entities
{
    public class CourseTopic
    {
        public CourseTopic()
        {
            Lessons = new HashSet<CourseLesson>();
        }
        public int Id { get; set; }
        public int CourseId { get; set; }
        public string TopicName { get; set; }
        public bool IsActive { get; set; }
        public decimal Sequence { get; set; }
        public int TopicTypeId { get; set; }

        public virtual Course Course { get; set; }
        public virtual ICollection<CourseLesson> Lessons { get; set; }
    }
}
