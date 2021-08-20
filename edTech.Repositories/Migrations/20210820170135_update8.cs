using Microsoft.EntityFrameworkCore.Migrations;

namespace edTech.Repositories.Migrations
{
    public partial class update8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "URL",
                table: "Mentors",
                newName: "Url");

            migrationBuilder.RenameColumn(
                name: "EmailID",
                table: "Mentors",
                newName: "Email");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Url",
                table: "Mentors",
                newName: "URL");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Mentors",
                newName: "EmailID");
        }
    }
}
