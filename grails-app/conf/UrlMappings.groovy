class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

    "/profiles/$id?"(resource:"profiles")
    "/contacts/$id?"(resource:"contacts")
    "/app2"(view:"app2")

		"/"(view:"/home")
		"500"(view:'/error')
	}
}
