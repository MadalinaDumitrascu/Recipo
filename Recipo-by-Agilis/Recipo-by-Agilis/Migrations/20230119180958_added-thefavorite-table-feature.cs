using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class addedthefavoritetablefeature : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "28cdfc41-4e6f-4e6e-b013-293599ed0347");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7ab5d2ce-2b3f-48f9-a6e5-e42235649369");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ed739f06-21fb-4cf9-a549-e0a98a01309a");

            migrationBuilder.CreateTable(
                name: "Favorites",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RecipeId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favorites", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "15bf6691-6477-439b-8011-266fa6859373", "2", "FreeUser", "FreeUser" },
                    { "7f4a90da-324e-48f9-ad5d-e3fd7c13e2bf", "3", "SubscribedUser", "SubscribedUser" },
                    { "a8c85c95-fec2-4c3a-870f-3651db81c7b8", "1", "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Favorites");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "15bf6691-6477-439b-8011-266fa6859373");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7f4a90da-324e-48f9-ad5d-e3fd7c13e2bf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a8c85c95-fec2-4c3a-870f-3651db81c7b8");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "28cdfc41-4e6f-4e6e-b013-293599ed0347", "2", "FreeUser", "FreeUser" },
                    { "7ab5d2ce-2b3f-48f9-a6e5-e42235649369", "3", "SubscribedUser", "SubscribedUser" },
                    { "ed739f06-21fb-4cf9-a549-e0a98a01309a", "1", "Admin", "Admin" }
                });
        }
    }
}
