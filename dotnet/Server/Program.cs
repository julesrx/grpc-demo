using Server;

var builder = WebApplication.CreateBuilder(args);
var isDevelopment = builder.Environment.IsDevelopment();

builder.Services.AddGrpc();
if (isDevelopment) builder.Services.AddGrpcReflection();

var app = builder.Build();
app.MapGrpcService<MatchesService>();
if (isDevelopment) app.MapGrpcReflectionService();

await app.RunAsync();