package contatti

class Contact {

    String firstName
    String lastName
    String email

    static constraints = {
      firstName nullable: true
      lastName nullable: true
      email nullable: true
    }
}
