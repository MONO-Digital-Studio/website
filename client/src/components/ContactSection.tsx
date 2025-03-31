import { useState } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, MailIcon, PhoneIcon, ClockIcon } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(data: ContactFormValues) {
    contactMutation.mutate(data);
  }
  
  const contactInfo = [
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      title: "Location",
      details: ["123 Tech Boulevard, Digital District", "San Francisco, CA 94107"],
    },
    {
      icon: <MailIcon className="h-5 w-5" />,
      title: "Email",
      details: ["info@monodigitalstudio.com", "support@monodigitalstudio.com"],
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: <ClockIcon className="h-5 w-5" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 4pm"],
    },
  ];
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-[#00FF41] text-sm mb-2 font-['Roboto_Mono']">// GET IN TOUCH</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Courier_Prime']">
            Contact <span className="text-[#00FF41]">Us</span>
          </h2>
          <div className="w-16 h-1 bg-[#00FF41] mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg p-8 border border-[#00FF41] hover:border-[#00FFFF] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Name" 
                              {...field} 
                              className="bg-[#0D0208] border-[#008F11] focus:border-[#00FF41] text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              {...field} 
                              className="bg-[#0D0208] border-[#008F11] focus:border-[#00FF41] text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject" 
                            {...field} 
                            className="bg-[#0D0208] border-[#008F11] focus:border-[#00FF41] text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message..." 
                            rows={6} 
                            {...field} 
                            className="bg-[#0D0208] border-[#008F11] focus:border-[#00FF41] text-white resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full md:w-auto relative overflow-hidden bg-[#00FF41] text-[#0D0208] hover:bg-[#008F11] hover:text-white transition-all"
                  >
                    <span className="relative z-10">
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </span>
                    <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 transition-all duration-700 hover:left-[100%]"></span>
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-[#00FF41] mr-4 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{info.title}</h4>
                      <p className="text-gray-300">
                        {info.details.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < info.details.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-8">
                  <h4 className="text-white font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['twitter', 'facebook', 'instagram', 'linkedin', 'github'].map((social) => (
                      <a 
                        key={social}
                        href="#" 
                        className="text-[#00FF41] hover:text-[#00FFFF] transition-colors text-xl"
                        aria-label={`Follow us on ${social}`}
                      >
                        <i className={`fab fa-${social}${social === 'facebook' ? '-f' : social === 'linkedin' ? '-in' : ''}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
