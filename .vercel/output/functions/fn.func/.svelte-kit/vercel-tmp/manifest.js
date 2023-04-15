export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-5815e671.js","imports":["_app/immutable/start-5815e671.js","_app/immutable/chunks/index-8e1005e2.js","_app/immutable/chunks/singletons-08507998.js","_app/immutable/chunks/index-43523b37.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
