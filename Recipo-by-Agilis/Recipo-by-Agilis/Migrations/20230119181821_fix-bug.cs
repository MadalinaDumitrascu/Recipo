using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class fixbug : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    { "32c91f3f-e4e4-47f7-aa65-3ed1792d0f6e", "3", "SubscribedUser", "SubscribedUser" },
                    { "b4c9554d-15c6-4aaa-9832-165952d6be1e", "1", "Admin", "Admin" },
                    { "d0c13854-b341-4147-b059-52ff2326cde6", "2", "FreeUser", "FreeUser" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "32c91f3f-e4e4-47f7-aa65-3ed1792d0f6e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b4c9554d-15c6-4aaa-9832-165952d6be1e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d0c13854-b341-4147-b059-52ff2326cde6");

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
    }
}
