using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class recipebyuser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "007c6580-ec59-4f54-bc28-f1aa8378a26f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "272fa717-b07e-4610-ac33-ea648754c6dc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5d2b6ea9-7837-4030-9356-1477c9ab5213");

            migrationBuilder.CreateTable(
                name: "RecipeByUser",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RecipeId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecipeByUser", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "aac9b586-af9b-4ae7-a775-a4f94f654378", "3", "SubscribedUser", "SubscribedUser" },
                    { "d1b1a117-d271-4653-a243-30928ec8c6d2", "2", "FreeUser", "FreeUser" },
                    { "fd77a56d-b045-4308-9ace-fbacd421185a", "1", "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RecipeByUser");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "aac9b586-af9b-4ae7-a775-a4f94f654378");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d1b1a117-d271-4653-a243-30928ec8c6d2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fd77a56d-b045-4308-9ace-fbacd421185a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "007c6580-ec59-4f54-bc28-f1aa8378a26f", "2", "FreeUser", "FreeUser" },
                    { "272fa717-b07e-4610-ac33-ea648754c6dc", "3", "SubscribedUser", "SubscribedUser" },
                    { "5d2b6ea9-7837-4030-9356-1477c9ab5213", "1", "Admin", "Admin" }
                });
        }
    }
}
