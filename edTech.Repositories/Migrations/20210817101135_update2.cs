using Microsoft.EntityFrameworkCore.Migrations;

namespace edTech.Repositories.Migrations
{
    public partial class update2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CodePath",
                table: "CourseLessons");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "CourseLessons");

            migrationBuilder.RenameColumn(
                name: "PdfPath",
                table: "CourseLessons",
                newName: "ContentPath");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ContentPath",
                table: "CourseLessons",
                newName: "PdfPath");

            migrationBuilder.AddColumn<string>(
                name: "CodePath",
                table: "CourseLessons",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "CourseLessons",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
