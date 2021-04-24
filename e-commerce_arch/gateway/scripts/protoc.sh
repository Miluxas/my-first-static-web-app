#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../ || exit

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="./node_modules/.bin/grpc_tools_node_protoc_plugin"
GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"

PROTO_DEST=./src/protoDef
mkdir -p ${PROTO_DEST}

for f in ./proto/*; do

	echo "***************************************************"
	echo ${f}
	echo "***************************************************"

	# loop over all the available proto files and compile them into respective dir
	# JavaScript code generating
	${GRPC_TOOLS_NODE_PROTOC} \
		--js_out=import_style=commonjs,binary:${PROTO_DEST} \
		--grpc_out=${PROTO_DEST} \
		--plugin=protoc-gen-grpc=${GRPC_TOOLS_NODE_PROTOC_PLUGIN} \
		-I ./proto \
		${f}

	# TypeScript code generation
	${GRPC_TOOLS_NODE_PROTOC} \
		--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
		--ts_out=${PROTO_DEST} \
		-I ./proto \
		${f}

done
