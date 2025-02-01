import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useResumeStore } from "@/lib/store";
import type { TemplateType } from "@/lib/store";
import { cn } from "@/lib/utils";

const templates: { id: TemplateType; name: string; description: string }[] = [
  {
    id: "modern",
    name: "Modern",
    description:
      "Clean and contemporary design with a focus on visual hierarchy",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Traditional format preferred by recruiters and ATS systems",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and straightforward layout emphasizing content",
  },
];

export function TemplateSelector() {
  const { selectedTemplate, updateTemplate } = useResumeStore();

  return (
    <RadioGroup
      value={selectedTemplate}
      onValueChange={(value) => updateTemplate(value as TemplateType)}
      className="grid gap-4 md:grid-cols-3"
    >
      {templates.map((template) => (
        <Label
          key={template.id}
          htmlFor={template.id}
          className={cn(
            "cursor-pointer space-y-2 rounded-lg border-2 p-4 hover:bg-accent",
            selectedTemplate === template.id && "border-primary"
          )}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={template.id} id={template.id} />
            <span className="font-medium">{template.name}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {template.description}
          </p>
        </Label>
      ))}
    </RadioGroup>
  );
}
