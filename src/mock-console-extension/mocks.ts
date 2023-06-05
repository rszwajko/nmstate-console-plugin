const paths = {
  '/api/kubernetes/apis/networking.k8s.io/v1/networkpolicies': {
    kind: 'NetworkPolicyList',
    apiVersion: 'networking.k8s.io/v1',
    metadata: {
      continue: '',
      resourceVersion: '23404',
    },
    items: [
      {
        metadata: {
          name: 'foobar',
          namespace: 'okd-console',
          uid: 'aa5a8fae-7e84-4679-b653-8bcf75e59732',
          resourceVersion: '23342',
          generation: 1,
          creationTimestamp: '2023-06-05T20:59:43Z',
        },
        spec: {
          podSelector: {},
          policyTypes: ['Ingress'],
        },
        status: {},
      },
    ],
  },
  '/api/kubernetes/apis/networking.k8s.io/v1/namespaces/okd-console/networkpolicies': {
    kind: 'NetworkPolicyList',
    apiVersion: 'networking.k8s.io/v1',
    metadata: {
      continue: '',
      resourceVersion: '23404',
    },
    items: [
      {
        metadata: {
          name: 'foo',
          namespace: 'okd-console',
          uid: 'aa5a8fae-7e84-4679-b653-8bcf75e59732',
          resourceVersion: '23342',
          generation: 1,
          creationTimestamp: '2023-06-05T20:59:43Z',
        },
        spec: {
          podSelector: {},
          policyTypes: ['Ingress'],
        },
        status: {},
      },
    ],
  },
};

export const getMockData = ({ pathname, method, params }) =>
  paths[pathname] && { statusCode: 200, body: paths[pathname] };
