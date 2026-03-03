import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactForm } from "@/hooks/useQueries";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const contactCards = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["123 Commerce Street", "San Francisco, CA 94105"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["support@affiliatepro.com", "partnerships@affiliatepro.com"],
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 800-555-0199", "Mon–Fri, 9AM–6PM PST"],
    color: "bg-purple-50 text-purple-600",
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject) errors.subject = "Please select a subject.";
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const submitMutation = useSubmitContactForm();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await submitMutation.mutateAsync({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      setSubmitStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-brand-primary pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Have questions about our platform? We're here to help. Reach out
              and our team will get back to you within one business day.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-shadow bg-card border border-border rounded-2xl p-6 flex items-start gap-4"
            >
              <div
                className={cn(
                  "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                  card.color,
                )}
              >
                <card.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-foreground mb-2">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-muted-foreground text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-shadow bg-card border border-border rounded-3xl p-8 sm:p-10"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                data-ocid="contact.success_state"
                className="flex flex-col items-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground max-w-sm text-sm">
                  Thanks for reaching out, {form.name || "there"}. We'll get
                  back to you at your email within one business day.
                </p>
                <Button
                  className="mt-6 bg-brand-primary hover:bg-brand-primary-dark text-white"
                  onClick={() => setSubmitStatus("idle")}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    data-ocid="contact.name_input"
                    className={cn(
                      "h-11",
                      errors.name &&
                        "border-destructive focus-visible:ring-destructive/30",
                    )}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    data-ocid="contact.email_input"
                    className={cn(
                      "h-11",
                      errors.email &&
                        "border-destructive focus-visible:ring-destructive/30",
                    )}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-subject"
                    className="text-sm font-medium text-foreground"
                  >
                    Subject <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.subject}
                    onValueChange={(val) => handleChange("subject", val)}
                  >
                    <SelectTrigger
                      id="contact-subject"
                      data-ocid="contact.subject_select"
                      className={cn(
                        "h-11",
                        errors.subject && "border-destructive",
                      )}
                    >
                      <SelectValue placeholder="Select a subject..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Inquiry">
                        General Inquiry
                      </SelectItem>
                      <SelectItem value="Technical Support">
                        Technical Support
                      </SelectItem>
                      <SelectItem value="Partnership">
                        Partnership Opportunity
                      </SelectItem>
                      <SelectItem value="Payment Issue">
                        Payment Issue
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <p className="text-destructive text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    data-ocid="contact.message_textarea"
                    rows={5}
                    className={cn(
                      "resize-none",
                      errors.message &&
                        "border-destructive focus-visible:ring-destructive/30",
                    )}
                  />
                  <div className="flex justify-between items-center">
                    {errors.message ? (
                      <p className="text-destructive text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <p className="text-muted-foreground text-xs ml-auto">
                      {form.message.length}/1000
                    </p>
                  </div>
                </div>

                {/* Error Banner */}
                {submitStatus === "error" && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-center gap-3 px-4 py-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <p>
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  data-ocid="contact.submit_button"
                  disabled={submitMutation.isPending}
                  className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold h-12 rounded-xl"
                >
                  {submitMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Business Hours Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-3 text-muted-foreground text-sm"
          >
            <Clock className="w-4 h-4 text-brand-accent" />
            <span>
              Business hours:{" "}
              <strong className="text-foreground">
                Mon–Fri, 9:00 AM – 6:00 PM PST
              </strong>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
