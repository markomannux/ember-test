package contatti
import grails.converters.*

class ContactsController {

    def index() { }

    def save() {
      println "saving..."  
      def contact = new Contact(params.contact)
      contact.save()
      def result = [contact: contact]
      render result as JSON
    }
    def update() {
      println "updating..."
    }
    def show() {
      println "showing..."  
      def contacts = Contact.findAll(params)
      def result = [contacts: contacts]
      render result as JSON
    }
    def delete() {
      println "deleting..."  
    }
}
