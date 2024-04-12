# What I've learned so far

- GRPC and Web don't mix.
- The grpc-web library is shit, lacks features, and doesn't work well with NextJS

### Getting Started

Running the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

--- 

### Generating Client library from Protobuf definitions

```
// Javascript
protoc -I=. src/proto/users/v1.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.


// Typescript - experimental
protoc -I=. src/proto/users/v1.proto \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcweb:.
```


### Running the Envoy proxy
```
docker run -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.22.0
```