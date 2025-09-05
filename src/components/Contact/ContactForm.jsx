// import { UseForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "../ui/card";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { submitToWeb3Forms } from "@/lib/form-handler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
export default function ContactForm() {
  const [isCooldown, setIsCooldown] = useState(false);

  const schema = z.object({
    email: z.string().email({ message: "Email inválido" }),
    name: z.string().min(1, { message: "Nome obrigatório" }),
    cellphone: z
      .string()
      .min(10, { message: "Telefone deve ter no mínimo 10 dígitos" })
      .max(15, { message: "Telefone deve ter no máximo 15 dígitos" })
      .regex(/^\d+$/, { message: "Telefone deve conter apenas números" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data) {
    try {
      await submitToWeb3Forms(data);
      toast.success("Formulário enviado com sucesso!", {
        description: "Entraremos em contato em breve. Obrigado!",
      });
      setIsCooldown(true); // Ativa o cooldown após o sucesso
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      toast.error("Houve um erro ao enviar o formulário.", {
        description: "Por favor, tente novamente mais tarde.",
      });
    }
  }
  useEffect(() => {
    if (!isCooldown) return;

    const timer = setTimeout(() => {
      setIsCooldown(false); // Libera o botão após 30 segundos
    }, 30000); // 30 segundos em milissegundos

    // Função de limpeza: se o componente for desmontado, o timer é cancelado.
    // Isso evita memory leaks.
    return () => clearTimeout(timer);
  }, [isCooldown]);

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -100 }}
      bounce={0.5}
      duration={2}
    >
      <Card className="md:w-[60vw] w-[80vw] h-full my-5">
        <CardHeader>
          <CardTitle className="text-2xl poppins-bold">
            Preencha com suas informações abaixo!
          </CardTitle>
          <CardDescription className="poppins-regular text-lg">
            Preencha com suas informações abaixo e entraremos em contato o mais
            breve possível.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="poppins-regular text-xl">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("email", { required: "Email obrigatório" })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="name" className="poppins-regular text-xl">
                    Nome Completo
                  </Label>
                </div>
                <Input
                  id="name"
                  type="text"
                  required
                  {...register("name", { required: "Nome obrigatório" })}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label
                    htmlFor="cellphone"
                    className="poppins-regular text-xl"
                  >
                    Telefone
                  </Label>
                </div>
                <Input
                  id="cellphone"
                  type="tel"
                  required
                  placeholder="Ex: 11999999999"
                  {...register("cellphone", {
                    required: "Telefone obrigatório",
                  })}
                />
                {errors.cellphone && (
                  <span className="text-red-500 text-xs">
                    {errors.cellphone.message}
                  </span>
                )}
              </div>
            </div>
            <CardFooter className="flex-col gap-2 mt-4">
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer poppins-bold text-md"
                disabled={isSubmitting || isCooldown}
              >
                {isSubmitting ? "Enviando..." : "Enviar!"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
