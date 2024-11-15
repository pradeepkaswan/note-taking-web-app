"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster position="bottom-right" expand={false} richColors closeButton />
  );
}
