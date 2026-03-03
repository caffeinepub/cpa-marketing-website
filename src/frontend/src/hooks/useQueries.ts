import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubscribe() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error("Not connected");
      return actor.subscribe(email);
    },
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      subject,
      message,
    }: {
      name: string;
      email: string;
      subject: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(name, email, subject, message);
    },
  });
}
