stern --kubeconfig=do-config.yml dpl


stern --kubeconfig="do-config.yml" dpl --namespace="dev"
stern --kubeconfig="do-config.yml" dpl --namespace="master"

git submodule update --remote --merge 