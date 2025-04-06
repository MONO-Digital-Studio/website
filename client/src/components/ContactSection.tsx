import { motion } from "framer-motion";
import { MailIcon, PhoneIcon } from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
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
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно быть не менее 2 символов" }),
  email: z.string().email({ message: "Пожалуйста, введите корректный email" }),
  subject: z.string().min(2, { message: "Тема должна быть не менее 2 символов" }),
  message: z.string().min(10, { message: "Сообщение должно быть не менее 10 символов" }),
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
    onSuccess: (data) => {
      toast({
        title: "Сообщение отправлено!",
        description: "Ваше сообщение успешно отправлено на hello@monostudio.site. Мы свяжемся с вами в ближайшее время.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error: any) => {
      const errorMessage = error?.response?.data?.message || 
                           error?.message || 
                           "Пожалуйста, попробуйте позже.";
      
      toast({
        title: "Ошибка отправки сообщения",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(data: ContactFormValues) {
    contactMutation.mutate(data);
  }
  
  const contactInfo = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      title: "Email",
      details: ["hello@monostudio.site"],
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      title: "Телефон",
      details: ["+7 800 101 51 59"],
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
          <div className="text-[#00FF41] text-sm mb-2 font-['Roboto_Mono']">// СВЯЖИТЕСЬ С НАМИ</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Courier_Prime']">
            Связаться <span className="text-[#00FF41]">С Нами</span>
          </h2>
          <div className="w-16 h-1 bg-[#00FF41] mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 border border-[#00FF41] hover:border-[#00FFFF] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Напишите нам</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Имя</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Ваше имя" 
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
                              placeholder="Ваш email" 
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
                        <FormLabel className="text-white">Тема</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Тема сообщения" 
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
                        <FormLabel className="text-white">Сообщение</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Ваше сообщение..." 
                            rows={4} 
                            {...field} 
                            className="bg-[#0D0208] border-[#008F11] focus:border-[#00FF41] text-white resize-none sm:rows-6"
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
                      {contactMutation.isPending ? "Отправка..." : "Отправить Сообщение"}
                    </span>
                    <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 transition-all duration-700 hover:left-[100%]"></span>
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="md:text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Контакты</h3>
              <div className="space-y-4 sm:space-y-6 h-full flex flex-col">
                <div className="space-y-4 sm:space-y-6 flex-grow">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start md:justify-center">
                      <div className="text-[#00FF41] mr-3 sm:mr-4 mt-1 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1 text-sm sm:text-base">{info.title}</h4>
                        <p className="text-gray-300 text-sm sm:text-base">
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
                </div>
                
                <div className="mt-auto pt-6 sm:pt-8 border-t border-[#008F11]/30">
                  <h4 className="text-white font-bold mb-3 text-sm sm:text-base">Мессенджеры</h4>
                  <div className="flex items-center gap-4 sm:gap-5 md:justify-center">
                    <a 
                      href="https://t.me/MONOStudioCRM_Bot" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0D0208]/50 text-[#00FF41] hover:text-[#00FFFF] hover:bg-[#0D0208]/80 transition-all text-lg sm:text-xl p-3 rounded-md flex items-center"
                      aria-label="Написать в Telegram бот @MONOStudioCRM_Bot"
                    >
                      <FaTelegramPlane className="mr-2" />
                      <span>Telegram</span>
                    </a>
                    <a 
                      href="https://wa.me/message/TXZPIWUQEWARP1" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0D0208]/50 text-[#00FF41] hover:text-[#00FFFF] hover:bg-[#0D0208]/80 transition-all text-lg sm:text-xl p-3 rounded-md flex items-center"
                      aria-label="Написать в WhatsApp"
                    >
                      <FaWhatsapp className="mr-2" />
                      <span>WhatsApp</span>
                    </a>
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
