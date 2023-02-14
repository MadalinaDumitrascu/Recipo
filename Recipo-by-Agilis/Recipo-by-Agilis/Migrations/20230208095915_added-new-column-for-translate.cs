using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class addednewcolumnfortranslate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.AddColumn<string>(
                name: "Translate",
                table: "Subscription",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Translate",
                table: "Recipes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Translate",
                table: "Ingredients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Translate",
                table: "Category",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2e9d1034-a945-4643-874f-31527a5dd244", "2", "FreeUser", "FreeUser" },
                    { "72fe0072-af6f-4188-a6ed-bbf60f55fd6b", "1", "Admin", "Admin" },
                    { "d3a07559-32e0-4fe6-af9a-5f9a850cab5a", "3", "SubscribedUser", "SubscribedUser" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2e9d1034-a945-4643-874f-31527a5dd244");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "72fe0072-af6f-4188-a6ed-bbf60f55fd6b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d3a07559-32e0-4fe6-af9a-5f9a850cab5a");

            migrationBuilder.DropColumn(
                name: "Translate",
                table: "Subscription");

            migrationBuilder.DropColumn(
                name: "Translate",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "Translate",
                table: "Ingredients");

            migrationBuilder.DropColumn(
                name: "Translate",
                table: "Category");

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
    }
}
