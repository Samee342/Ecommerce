"use client";
import { confirmPayment } from "@/app/api/orders";
import Spinner from "@/app/components/Spinner";
import { ORDER_STATUS_CONFIRMED } from "@/app/constants/orderstatus";
import { ORDERS_ROUTE } from "@/app/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const KhaltiPaymentPage = () => {
  const searchParams = useSearchParams();
  const status = searchParams?.get("status");
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    confirmPayment(params.id, { status })
      .then(() => {
        toast.success("payment success", {
          autoClose: 2500,
          onClose: () => {
            router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
          },
        });
      })
      .catch(() => {
        toast.error("payment failed", {
          autoClose: 2500,
          onClose: () => {
            router.push(ORDERS_ROUTE);
          },
        });
      });
  }, [params.id, status, router]);

  //console.log(status);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      {loading && <Spinner className="h-12 w-12 fill-secondary" />}
      <h2 className="mt-4 text-lg font-medium">Verifying payment...</h2>
    </div>
  );
};

export default KhaltiPaymentPage;
