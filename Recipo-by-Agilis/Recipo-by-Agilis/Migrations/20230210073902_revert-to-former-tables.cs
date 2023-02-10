using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class reverttoformertables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "07c2d067-2af5-4a1f-bd14-dba9bd6cb586");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b4193792-d960-42e0-b664-7d933b5ab009");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ef04a834-d60e-4949-a282-005922b2f24e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2fa0b72c-a6c6-434a-9dfa-0a99a10b7a2b", "3", "SubscribedUser", "SubscribedUser" },
                    { "5b690e99-cbea-40e9-b59f-98fdbc8c58e0", "1", "Admin", "Admin" },
                    { "7a3ccdd9-10ff-4760-ac0d-b82f7eb5014c", "2", "FreeUser", "FreeUser" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2fa0b72c-a6c6-434a-9dfa-0a99a10b7a2b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5b690e99-cbea-40e9-b59f-98fdbc8c58e0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7a3ccdd9-10ff-4760-ac0d-b82f7eb5014c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "07c2d067-2af5-4a1f-bd14-dba9bd6cb586", "1", "Admin", "Admin" },
                    { "b4193792-d960-42e0-b664-7d933b5ab009", "3", "SubscribedUser", "SubscribedUser" },
                    { "ef04a834-d60e-4949-a282-005922b2f24e", "2", "FreeUser", "FreeUser" }
                });
        }
    }
}
