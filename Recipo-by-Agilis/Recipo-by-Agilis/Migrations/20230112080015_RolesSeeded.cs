using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class RolesSeeded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0839eb44-df95-4410-9d80-a7d83589992a", "1", "Admin", "Admin" },
                    { "0c24afdb-77bf-42b4-bece-a27acbe1418c", "2", "FreeUser", "FreeUser" },
                    { "c6750acd-03d1-44ed-a880-3472e648964a", "3", "SubscribedUser", "SubscribedUser" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0839eb44-df95-4410-9d80-a7d83589992a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0c24afdb-77bf-42b4-bece-a27acbe1418c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c6750acd-03d1-44ed-a880-3472e648964a");
        }
    }
}
