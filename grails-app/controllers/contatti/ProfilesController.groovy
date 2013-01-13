package contatti

import grails.converters.*

class ProfilesController {

    def index() { }

    def save() {
      println("saving... $params") 
      params.profile.id = 1
      def result = [profile: params.profile]
      render result as JSON

    }
}
