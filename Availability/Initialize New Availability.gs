function initializeNewAvailability() {
  // Check if person is not on the Availability List yet, if not add them to it and the Roster
  //newPersonCheck();
  // See if the person who submitted the newset availability already has one on file
  // If so, store the old availability in the Old Availabilities Sheet and delete the old onee from the data sheet
  findRemoveDupAvail();
  // Sort the new Availability Data Sheet in thee format based on staff rank
  sortAvailability();
  // Send updated availability to main spreadsheet (ss)
  sendSortedAvailability();
}
