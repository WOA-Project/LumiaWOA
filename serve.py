import http.server
import socketserver

PORT = 8000  # You can change this to any port number you prefer

Handler = http.server.SimpleHTTPRequestHandler

# Serving the current directory
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
