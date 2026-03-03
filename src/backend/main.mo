import Map "mo:core/Map";
import Set "mo:core/Set";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Order "mo:core/Order";

actor {
  // Data Structures
  type ContactSubmission = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compareByTimestamp(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  // Storage
  let submissions = Map.empty<Nat, ContactSubmission>();
  var nextSubmissionId = 0;

  let subscribers = Set.empty<Text>();
  let admins = Set.empty<Principal>();

  // Initialize with first caller as admin
  public shared ({ caller }) func initialize() : async () {
    if (admins.isEmpty()) {
      admins.add(caller);
    } else {
      Runtime.trap("Already initialized");
    };
  };

  // Admin Management
  public shared ({ caller }) func addAdmin(newAdmin : Principal) : async () {
    if (not admins.contains(caller)) {
      Runtime.trap("Only admins can add new admins");
    };
    admins.add(newAdmin);
  };

  // Newsletter Management
  public shared ({ caller }) func subscribe(email : Text) : async Nat {
    let beforeSize = subscribers.size();
    subscribers.add(email);
    let afterSize = subscribers.size();
    afterSize - beforeSize;
  };

  public shared ({ caller }) func unsubscribe(email : Text) : async () {
    if (not subscribers.contains(email)) {
      Runtime.trap("No subscription with that email found");
    };
    subscribers.remove(email);
  };

  public query ({ caller }) func getSubscribers() : async [Text] {
    subscribers.toArray();
  };

  // Contact Form Handling
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      subject;
      message;
      timestamp = Time.now();
    };
    submissions.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    if (not admins.contains(caller)) {
      Runtime.trap("Only admins can view contact submissions");
    };
    submissions.values().toArray().sort(ContactSubmission.compareByTimestamp);
  };

  public query ({ caller }) func isSubscribed(email : Text) : async Bool {
    subscribers.contains(email);
  };
};
