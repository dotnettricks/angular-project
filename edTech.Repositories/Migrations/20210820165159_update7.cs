using Microsoft.EntityFrameworkCore.Migrations;

namespace edTech.Repositories.Migrations
{
    public partial class update7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Courses_MentorId",
                table: "Courses",
                column: "MentorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Mentors_MentorId",
                table: "Courses",
                column: "MentorId",
                principalTable: "Mentors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Mentors_MentorId",
                table: "Courses");

            migrationBuilder.DropIndex(
                name: "IX_Courses_MentorId",
                table: "Courses");
        }
    }
}
