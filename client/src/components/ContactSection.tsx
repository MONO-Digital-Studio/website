import { motion } from "framer-motion";
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
    onSuccess: (response: any) => {
      // Сбрасываем форму
      form.reset();
      
      // Получаем информацию о результатах отправки
      const emailSent = response?.emailSent;
      const telegramSent = response?.telegramSent;
      
      // Формируем детальное сообщение о статусе отправки
      let statusDetails = "";
      if (emailSent && telegramSent) {
        statusDetails = "Сообщение отправлено на email и в Telegram.";
      } else if (emailSent) {
        statusDetails = "Сообщение отправлено только на email.";
      } else if (telegramSent) {
        statusDetails = "Сообщение отправлено только в Telegram.";
      }
      
      // Показываем сообщение об успешной отправке
      toast({
        title: "Сообщение отправлено!",
        description: `Ваше сообщение успешно отправлено. ${statusDetails} Мы свяжемся с вами в ближайшее время.`,
        variant: "default",
      });
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
      title: "Email",
      details: ["hello@monostudio.site"],
    },
    {
      title: "Телефон",
      details: ["+7 800 101 51 59"],
    },
  ];
  
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-['Courier_Prime']">
            Свяжитесь <span className="text-[#00FF41]">с Нами</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#00FF41] mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 border border-[#00FF41] hover:border-white transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="md:text-center flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">Напишите нам</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="Ваше имя" 
                                {...field} 
                                className="bg-[#0D0208] border-[#008F11] focus:border-white text-white text-sm sm:text-base h-9 sm:h-10"
                              />
                            </FormControl>
                            <FormMessage className="text-xs sm:text-sm" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="Ваш email" 
                                {...field} 
                                className="bg-[#0D0208] border-[#008F11] focus:border-white text-white text-sm sm:text-base h-9 sm:h-10"
                              />
                            </FormControl>
                            <FormMessage className="text-xs sm:text-sm" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="Тема сообщения" 
                              {...field} 
                              className="bg-[#0D0208] border-[#008F11] focus:border-white text-white text-sm sm:text-base h-9 sm:h-10"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder="Ваше сообщение..." 
                              rows={3}
                              {...field} 
                              className="bg-[#0D0208] border-[#008F11] focus:border-white text-white resize-none text-sm sm:text-base sm:rows-4 md:rows-5"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </div>
              <div className="md:text-center pt-3 sm:pt-4 md:pt-6 mt-3 sm:mt-4 flex md:justify-center">
                <Button 
                  type="submit"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={contactMutation.isPending}
                  className="w-full md:w-auto relative overflow-hidden bg-[#00FF41] text-[#0D0208] hover:bg-[#008F11] hover:text-white transition-all text-sm sm:text-base py-2"
                >
                  <span className="relative z-10">
                    {contactMutation.isPending ? "Отправка..." : "Отправить Сообщение"}
                  </span>
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 transition-all duration-700 hover:left-[100%]"></span>
                </Button>
              </div>
            </div>
            
            <div className="md:text-center flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">Контакты</h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="md:justify-center">
                      <h4 className="text-[#00FF41] font-bold mb-1 text-xs sm:text-sm md:text-base">{info.title}</h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {info.details.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < info.details.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
                
              <div className="pt-4 sm:pt-6 md:pt-8 border-t border-[#008F11]/30 mt-auto">
                <h4 className="text-[#00FF41] font-bold mb-2 sm:mb-3 text-sm sm:text-base md:text-center">Мессенджеры</h4>
                <div className="md:text-center flex md:justify-center">
                  <div className="inline-flex items-center gap-2 sm:gap-4 md:gap-5 justify-center w-full">
                    <a 
                      href="https://t.me/MONOStudioCRM_Bot" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0D0208]/50 text-[#00FF41] hover:text-white hover:bg-[#0D0208]/80 transition-all text-sm sm:text-base md:text-lg p-2 sm:p-3 rounded-md flex items-center flex-1 justify-center"
                      aria-label="Написать в Telegram бот @MONOStudioCRM_Bot"
                    >
                      <FaTelegramPlane className="mr-1 sm:mr-2" />
                      <span>Telegram</span>
                    </a>
                    <a 
                      href="https://wa.me/message/TXZPIWUQEWARP1" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0D0208]/50 text-[#00FF41] hover:text-white hover:bg-[#0D0208]/80 transition-all text-sm sm:text-base md:text-lg p-2 sm:p-3 rounded-md flex items-center flex-1 justify-center"
                      aria-label="Написать в WhatsApp"
                    >
                      <FaWhatsapp className="mr-1 sm:mr-2" />
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
