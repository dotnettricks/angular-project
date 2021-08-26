using Microsoft.EntityFrameworkCore.Migrations;

namespace edTech.Repositories.Migrations
{
    public partial class update10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GenderId",
                table: "Mentors");

            migrationBuilder.DropColumn(
                name: "Url",
                table: "Mentors");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GenderId",
                table: "Mentors",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "Mentors",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
