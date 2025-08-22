"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  isDefaultExpanded?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  isDefaultExpanded = false,
  onExpand,
  onCollapse,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  useEffect(() => {
    setIsExpanded(isDefaultExpanded);
  }, [isDefaultExpanded]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
      if (isExpanded) {
        onCollapse?.();
      } else {
        onExpand?.();
      }
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <Card className="flex bg-transparent p-1">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-base sm:text-base gap-x-1">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs bg-red-200 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-900"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
              <div className="flex flex-row opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {/* <p className="text-xs sm:text-xs">
                  {isExpanded ? "Less details" : "More details"}
                </p> */}
                <ChevronRightIcon
                  className={cn(
                    "size-6 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </div>
            </div>
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0, margin: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`mt-2 text-xs sm:text-sm`}
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
